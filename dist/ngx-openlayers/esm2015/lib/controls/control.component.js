/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
export class ControlComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        this.componentType = 'control';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlComponent.propDecorators = {
    content: [{ type: ContentChild, args: [ContentComponent,] }]
};
if (false) {
    /** @type {?} */
    ControlComponent.prototype.componentType;
    /** @type {?} */
    ControlComponent.prototype.instance;
    /** @type {?} */
    ControlComponent.prototype.element;
    /** @type {?} */
    ControlComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUXhELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFPM0IsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQU45QixrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQU1PLENBQUM7Ozs7SUFFekMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFSUSxZQUFZOzs7c0JBYWxCLFlBQVksU0FBQyxnQkFBZ0I7Ozs7SUFIOUIseUNBQWlDOztJQUNqQyxvQ0FBa0I7O0lBQ2xCLG1DQUFpQjs7SUFDakIsbUNBQzBCOzs7OztJQUVkLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udGVudC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdjb250cm9sJztcclxuICBpbnN0YW5jZTogQ29udHJvbDtcclxuICBlbGVtZW50OiBFbGVtZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudClcclxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jb250ZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDb250cm9sKHRoaXMpO1xyXG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=