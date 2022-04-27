import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyCommunitiesListComponent } from './hy-communities-list.component';

describe('HyCommunitiesListComponent', () => {
  let component: HyCommunitiesListComponent;
  let fixture: ComponentFixture<HyCommunitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyCommunitiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyCommunitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
