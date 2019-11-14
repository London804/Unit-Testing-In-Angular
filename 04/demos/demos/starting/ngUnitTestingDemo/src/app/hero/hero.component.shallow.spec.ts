import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        // Testbed Allows us to test component and html
        TestBed.configureTestingModule({
            declarations: [HeroComponent ],
            schemas: [NO_ERRORS_SCHEMA] // this tells Angular don't error if you encounter an unknown attribute/element
        });

       fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');

    });

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

        fixture.detectChanges(); // detectChanges this is necessary because we have bindings in our component {{hero.name}}
                                 // this tells Angular to run it so our expect statement can read it

        // debugElement is a wrapper around the DOM Node. By.css() let's you grab a property by a CSS tag
        // this is effectly the same as the expect below
        // expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');

        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude'); // nativeElement get access to DOM Element
    });
});
