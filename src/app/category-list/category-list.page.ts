import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  results: Observable<any>;  
  constructor(private activatedRoute :ActivatedRoute, private categoryservice :CategoryService) {}

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // Get the information from the API
    this.categoryservice.getCategoryList(id).subscribe(result => {
      this.results = result;
      console.log(this.results);      
    });

    
  }

}
