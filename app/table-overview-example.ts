import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import data from './data.json';
import { HttpClient, HttpHeaders } from  '@angular/common/http';


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample {
  displayedColumns = ['id', 'name', 'phone', 'email', 'company','date_entry','org_num','address_1','city','zip','geo','pan','pin','status','fee','date_exit','date_first','date_recent','url', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    console.log(data[0]);
    const users: UserData[] = data;
    //for (let i = 0; i <= data.length; i++) { users.push(); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface UserData {
  id: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  date_entry: Date;
  org_num: string;
  address_1: string;
  city: string;
  zip: string;
  geo: string;
  pan: string;
  pin: string;
  status: string;
  fee: string;
  date_exit: Date;
  date_first: Date;
  date_recent: Date;
  url: string;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */