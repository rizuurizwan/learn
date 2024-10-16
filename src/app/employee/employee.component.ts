import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  SelectControlValueAccessor,
} from '@angular/forms';
import { Modal } from 'bootstrap'; // Import the Bootstrap Modal
import { CommonServiceService } from '../common.service.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  formgroup!: FormGroup;
  spinner: boolean = true;
  constructor(
    public formbuilder: FormBuilder,
    public _service: CommonServiceService
  ) {}
  ngOnInit(): void {
    this.formcontrol();
    this.getall();
  }
  formcontrol() {
    this.formgroup = this.formbuilder.group({
      empId: [null],
      firstname: [null],
      lastName: [null],
    });
  }
  data: any;
  getall() {
    debugger;
    this._service.getlistdata('GetallEmployee').subscribe((res: any) => {
      this.data = res;
      this.spinner = false;
      // console.log(this.datalist)
    });
  }

  save() {
    debugger;
    const data = this.formgroup.value;
    this._service
      .InsertData(this.formgroup.value, 'InsertEmployee')
      .subscribe((res: any) => {
        location.reload();
      });
  }

  Edit(id: any) {
    debugger;
    var data = id;
    this._service.getById(data, 'GetEmployeeById').subscribe((res: any) => {
      this.formgroup.patchValue(res);
    });
  }
  Delete(id: any) {
    this._service.Delete(id, 'DeleteEmployee').subscribe((res) => {
      location.reload();
    });
  }
}
