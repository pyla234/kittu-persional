import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const Approutes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: '',
   component: GalleryComponent,
  children: [
    { path: 'gallery', component: GalleryComponent },
  ]
  },
]
