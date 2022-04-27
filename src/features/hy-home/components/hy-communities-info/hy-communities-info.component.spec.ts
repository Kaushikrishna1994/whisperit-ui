import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyCommunitiesInfoComponent } from './hy-communities-info.component';

describe('HyCommunitiesInfoComponent', () => {
  let component: HyCommunitiesInfoComponent;
  let fixture: ComponentFixture<HyCommunitiesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyCommunitiesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyCommunitiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
