import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadService } from 'src/app/services/firebase.service';
import * as moment from 'moment';
import { ApiService } from 'src/app/services/api.service';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
  TreeNode,
} from 'primeng/api';
import { LibraryFormModel, LibraryModel } from 'src/app/model/library.model';
import { Subject, takeUntil } from 'rxjs';
import { ForderModel } from 'src/app/model/forder.model';
@Component({
  selector: 'app-thu-vien-anh',
  templateUrl: './thu-vien-anh.component.html',
  styleUrls: ['./thu-vien-anh.component.scss'],
})
export class ThuVienAnhComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private fileUploadService: FileUploadService
  ) {}
  private readonly unsubscribe$: Subject<void> = new Subject();
  list: LibraryModel[] = [];
  @Output() selecteImg = new EventEmitter<any>();
  listFile: any;
  items: any;
  roots: any;
  forder: any;
  selectNote: any;
  getIdFromContextMenu: any;
  selectedFile: TreeNode;
  selectedNodes: any;
  displayModal = false;
  imageUrl = '';
  dataAddForder: ForderModel = new ForderModel();
  file: any = null;
  display: boolean = false;
  infoImage: LibraryFormModel = new LibraryFormModel();
  ngOnInit(): void {
    this.fetchData();
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Thêm thư mục', icon: 'pi pi-folder' },
      {
        label: 'Xoá folder',
        icon: 'pi pi-trash',
        command: (event: any) => this.deleteForder(),
      },
      {
        label: 'Thêm file',
        icon: 'pi pi-file',
        command: (event: any) => this.viewAddFile(),
      },
      { label: 'Sửa tên', icon: 'pi pi-pencil' },
    ];
  }

  fetchData(): void {
    this.getLibrariesFolder();
    this.getSelectNode();
  }

  onShowDialog() {
    this.displayModal = true;
  }

  getLibrariesFolder(): void {
    this.apiService.getLibrariesFolder().subscribe({
      next: (response) => {
        this.list = response.data.data;
        this.convertJsonToStructTree(this.list);
        console.log('lis', this.list);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  convertJsonToStructTree(list: LibraryModel[]) {
    const map: any = {};
    let node,
      i,
      roots = [];
    for (i = 0; i < list.length; i += 1) {
      map[list[i].Id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.ParentId !== '') {
        // if you have dangling branches check that map[node.parentId] exists
        if (list[map[node.ParentId]]) {
          list[map[node.ParentId]].children.push({
            nodeId: node.Id,
            label: node.Name,
            key: node.Id,
            data: node,
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            expanded: false,
            children: node.children,
          });
        }
      } else {
        roots.push(node);
      }
    }
    roots = roots.map((item) => {
      return this.bindingData(item);
    });
    this.roots = roots;
  }

  bindingData(item: any) {
    return {
      nodeId: item.Id,
      data: item,
      key: item.Id,
      label: item.Name,
      children: item.children,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
    };
  }

  getSelectNode(): void {
    this.apiService
      .getLibrariesFile(this.selectNote)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.listFile = response.data.data;
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  handleSelectNode(event: any) {
    this.selectNote = event.node.nodeId;
    this.apiService
      .getLibrariesFile(this.selectNote)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.listFile = response.Data.Data;
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  deleteImages(item: any) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xoá ảnh không?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.deleteLibrariesFile(item.Id).subscribe({
          next: (response) => {
            if (response.Status === 'success') {
              this.messageService.add({
                severity: 'success',
                summary: 'Thông báo',
                detail: 'Xoá thành công',
              });
              this.fileUploadService.deleteFileStorage(item.Path);
              this.getSelectNode();
            }
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Thông báo',
              detail: 'Xoá thất bại',
            });
          },
        });
      },
    });
  }

  viewAddFile() {
    this.display = true;
  }

  uploadFile() {
    this.display = false;
    const { downloadUrl$, uploadProgress$, filePath } =
      this.fileUploadService.pushFile(this.file);
    downloadUrl$.subscribe((downloadUrl) => {
      this.infoImage.Url = downloadUrl;
      this.infoImage.Path = filePath;
      this.apiService.uploadFile(this.infoImage).subscribe((response) => {
        this.getSelectNode();
      });
    });
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    let reader: any = new FileReader();
    let img = new Image();
    img.src = window.URL.createObjectURL(this.file);
    reader.readAsDataURL(this.file);
    const thisContext = this;

    reader.onloadend = function () {
      var match = reader.result.match(/^data:([^/]+)\/([^;]+);/) || [];
      var type = match[1];
      thisContext.imageUrl = reader.result as any;
      thisContext.infoImage = {
        ...thisContext.infoImage,
        Name: thisContext.file.name,
        Size: thisContext.file.size,
        Type: type,
        Width: img.width,
        ParentId: thisContext.selectNote,
        Height: img.height,
        CreateBy: '',
        CreateDate: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        ModifiedDate: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        ModifiedBy: '',
      };
    };
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
  }

  selectImged(item: any) {
    this.selecteImg.emit(item.Url);
  }

  addForder(): void {
    const dataSave = { ...this.dataAddForder, Name: this.forder };
    this.apiService.setForderLibrary(dataSave).subscribe((response) => {
      console.log('reponse', response);
      this.getLibrariesFolder();
    });
    this.displayModal = false;
  }

  deleteForder() {
    console.log('Contextmenu', this.getIdFromContextMenu);
    this.apiService
      .deleteLibrariesFile(this.getIdFromContextMenu.nodeId)
      .subscribe((response) => {
        console.log(response);
        this.getLibrariesFolder();
      });
  }

  handleSelectContextMenu(event: any) {
    this.getIdFromContextMenu = event.node;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
