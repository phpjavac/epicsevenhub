import { NgModule } from '@angular/core';

import { CountRoutingModule } from './count-routing.module';

import { CountComponent } from './count.component';

import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CountRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ],
  declarations: [CountComponent],
  exports: [CountComponent],
})
export class CountModule {
}
