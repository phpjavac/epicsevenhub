import { NgModule } from '@angular/core';

import { CountRoutingModule } from './count-routing.module';

import { CountComponent } from './count.component';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CountRoutingModule,
    CommonModule,
  ],
  declarations: [CountComponent],
  exports: [CountComponent],
})
export class CountModule {}
