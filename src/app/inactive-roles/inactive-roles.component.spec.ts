import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveRolesComponent } from './inactive-roles.component';

describe('InactiveRolesComponent', () => {
  let component: InactiveRolesComponent;
  let fixture: ComponentFixture<InactiveRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
