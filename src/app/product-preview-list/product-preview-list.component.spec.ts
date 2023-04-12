import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPreviewListComponent } from './product-preview-list.component';

describe('ProductPreviewListComponent', () => {
  let component: ProductPreviewListComponent;
  let fixture: ComponentFixture<ProductPreviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPreviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
