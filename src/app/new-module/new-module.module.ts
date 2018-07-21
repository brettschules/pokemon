import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { routing } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TestComponent],
  exports: [
    TestComponent
  ]
})
export class NewModuleModule { }
