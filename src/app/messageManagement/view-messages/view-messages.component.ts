import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'src/app/service/message.service';


export interface MessageData {
  user: any,
  phoneNumber: string,
  messageContent: string,
  employee: any,
  messageBatch: any
}

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.css']
})
export class ViewMessagesComponent implements OnInit {

  displayedColumn: string[] = ['phoneNumber','messageContent','messageBatch','messageBatchDate','sender'];
  dataSource!: MatTableDataSource<MessageData>
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  posts:any

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.messageService.getAll().subscribe(response => {
      console.log("hello this is :"+JSON.stringify(response));
      this.posts = response
      this.dataSource = new MatTableDataSource(this.posts)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

}
