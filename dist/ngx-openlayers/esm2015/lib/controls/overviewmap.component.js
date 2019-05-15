/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { MapComponent } from '../map.component';
export class ControlOverviewMapComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    }
    /**
     * @private
     * @return {?}
     */
    reloadInstance() {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
}
ControlOverviewMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-overviewmap',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlOverviewMapComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlOverviewMapComponent.propDecorators = {
    collapsed: [{ type: Input }],
    collapseLabel: [{ type: Input }],
    collapsible: [{ type: Input }],
    label: [{ type: Input }],
    layers: [{ type: Input }],
    target: [{ type: Input }],
    tipLabel: [{ type: Input }],
    view: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlOverviewMapComponent.prototype.instance;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.collapsed;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.collapseLabel;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.collapsible;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.label;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.layers;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.target;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.tipLabel;
    /** @type {?} */
    ControlOverviewMapComponent.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ControlOverviewMapComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvb3ZlcnZpZXdtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQztBQUMxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVFoRCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBbUJ0QyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFQUSxZQUFZOzs7d0JBVWxCLEtBQUs7NEJBRUwsS0FBSzswQkFFTCxLQUFLO29CQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO3VCQUVMLEtBQUs7bUJBRUwsS0FBSzs7OztJQWZOLCtDQUFzQjs7SUFDdEIsZ0RBQ21COztJQUNuQixvREFDc0I7O0lBQ3RCLGtEQUNxQjs7SUFDckIsNENBQ2M7O0lBQ2QsNkNBQ2dCOztJQUNoQiw2Q0FDZ0I7O0lBQ2hCLCtDQUNpQjs7SUFDakIsMkNBQ1c7Ozs7O0lBRUMsMENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgT3ZlcnZpZXdNYXAgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLW92ZXJ2aWV3bWFwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sT3ZlcnZpZXdNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogT3ZlcnZpZXdNYXA7XHJcbiAgQElucHV0KClcclxuICBjb2xsYXBzZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBjb2xsYXBzZUxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBjb2xsYXBzaWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXllcnM6IExheWVyW107XHJcbiAgQElucHV0KClcclxuICB0YXJnZXQ6IEVsZW1lbnQ7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmlldzogVmlldztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJ2aWV3TWFwKHRoaXMpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlICE9IG51bGwgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgndmlldycpKSB7XHJcbiAgICAgIHRoaXMucmVsb2FkSW5zdGFuY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVsb2FkSW5zdGFuY2UoKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVydmlld01hcCh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==