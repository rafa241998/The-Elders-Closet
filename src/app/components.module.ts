import { NgModule } from '@angular/core';
import { CustomHeaderComponent } from './custom-header/custom-header.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,                
      ],
    declarations: [CustomHeaderComponent],
    exports: [CustomHeaderComponent]
})
export class ComponentsModule{}