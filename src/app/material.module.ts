import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import{MatTableModule} from '@angular/material/table';
import{MatButtonModule} from '@angular/material/button';
import{MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[MatInputModule,MatButtonModule,
    MatCardModule,MatFormFieldModule,MatTableModule
  ]
})
export class MaterialModule { }
