import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyCommunitiesCreateComponent } from './hy-communities-create.component';

describe('HyCommunitiesCreateComponent', () => {
  let component: HyCommunitiesCreateComponent;
  let fixture: ComponentFixture<HyCommunitiesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyCommunitiesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyCommunitiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
