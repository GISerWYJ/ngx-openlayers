/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Host } from '@angular/core';
import { AtlasManager, Circle, Fill, Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
var StyleCircleComponent = /** @class */ (function () {
    function StyleCircleComponent(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     * @return {?}
     */
    StyleCircleComponent.prototype.update = /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     * @return {?}
     */
    function () {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    };
    /**
     * @return {?}
     */
    StyleCircleComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StyleCircleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['radius']) {
            this.instance.setRadius(changes['radius'].currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    };
    /**
     * @return {?}
     */
    StyleCircleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    };
    StyleCircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-style-circle',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleCircleComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    StyleCircleComponent.propDecorators = {
        fill: [{ type: Input }],
        radius: [{ type: Input }],
        snapToPixel: [{ type: Input }],
        stroke: [{ type: Input }],
        atlasManager: [{ type: Input }]
    };
    return StyleCircleComponent;
}());
export { StyleCircleComponent };
if (false) {
    /** @type {?} */
    StyleCircleComponent.prototype.componentType;
    /** @type {?} */
    StyleCircleComponent.prototype.instance;
    /** @type {?} */
    StyleCircleComponent.prototype.fill;
    /** @type {?} */
    StyleCircleComponent.prototype.radius;
    /** @type {?} */
    StyleCircleComponent.prototype.snapToPixel;
    /** @type {?} */
    StyleCircleComponent.prototype.stroke;
    /** @type {?} */
    StyleCircleComponent.prototype.atlasManager;
    /**
     * @type {?}
     * @private
     */
    StyleCircleComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3N0eWxlcy9jaXJjbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBcUJFLDhCQUE0QixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQWR6QyxrQkFBYSxHQUFHLGNBQWMsQ0FBQztJQWNhLENBQUM7SUFFcEQ7Ozs7T0FJRzs7Ozs7OztJQUNILHFDQUFNOzs7Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkIsNkRBQTZEO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGlEQUFrQjs7O0lBQWxCO1FBQ0UsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6RDtRQUNELDZHQUE2RztJQUMvRyxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFQUSxjQUFjLHVCQXVCUixJQUFJOzs7dUJBWGhCLEtBQUs7eUJBRUwsS0FBSzs4QkFFTCxLQUFLO3lCQUVMLEtBQUs7K0JBRUwsS0FBSzs7SUF1Q1IsMkJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQW5EWSxvQkFBb0I7OztJQUMvQiw2Q0FBc0M7O0lBQ3RDLHdDQUF3Qjs7SUFFeEIsb0NBQ1c7O0lBQ1gsc0NBQ2U7O0lBQ2YsMkNBQ3FCOztJQUNyQixzQ0FDZTs7SUFDZiw0Q0FDMkI7Ozs7O0lBRWYsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXRsYXNNYW5hZ2VyLCBDaXJjbGUsIEZpbGwsIFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLWNpcmNsZSc7XHJcbiAgcHVibGljIGluc3RhbmNlOiBDaXJjbGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmlsbDogRmlsbDtcclxuICBASW5wdXQoKVxyXG4gIHJhZGl1czogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzdHJva2U6IFN0cm9rZTtcclxuICBASW5wdXQoKVxyXG4gIGF0bGFzTWFuYWdlcjogQXRsYXNNYW5hZ2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdPUkstQVJPVU5EOiBzaW5jZSB0aGUgcmUtcmVuZGVyaW5nIGlzIG5vdCB0cmlnZ2VyZWQgb24gc3R5bGUgY2hhbmdlXHJcbiAgICogd2UgdHJpZ2dlciBhIHJhZGl1cyBjaGFuZ2UuXHJcbiAgICogc2VlIG9wZW5sYXllcnMgIzYyMzMgYW5kICM1Nzc1XHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKCEhdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2VcXCdzIHJhZGl1cycpO1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyh0aGlzLnJhZGl1cyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuQ2lyY2xlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ3JhZGl1cyddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtY2lyY2xlLCBzZXR0aW5nIG5ldyByYWRpdXM6ICcsIGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtc3R5bGUtY2lyY2xlJyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UobnVsbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==