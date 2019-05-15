/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Host } from '@angular/core';
import { AtlasManager, Circle, Fill, Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
export class StyleCircleComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     * @return {?}
     */
    update() {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes['radius']) {
            this.instance.setRadius(changes['radius'].currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    }
}
StyleCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-circle',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
StyleCircleComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
StyleCircleComponent.propDecorators = {
    fill: [{ type: Input }],
    radius: [{ type: Input }],
    snapToPixel: [{ type: Input }],
    stroke: [{ type: Input }],
    atlasManager: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3N0eWxlcy9jaXJjbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUW5ELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFlL0IsWUFBNEIsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFkekMsa0JBQWEsR0FBRyxjQUFjLENBQUM7SUFjYSxDQUFDOzs7Ozs7O0lBT3BELE1BQU07UUFDSixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25CLDZEQUE2RDtZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6RDtRQUNELDZHQUE2RztJQUMvRyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULDRDQUE0QztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7OztZQVBRLGNBQWMsdUJBdUJSLElBQUk7OzttQkFYaEIsS0FBSztxQkFFTCxLQUFLOzBCQUVMLEtBQUs7cUJBRUwsS0FBSzsyQkFFTCxLQUFLOzs7O0lBWE4sNkNBQXNDOztJQUN0Qyx3Q0FBd0I7O0lBRXhCLG9DQUNXOztJQUNYLHNDQUNlOztJQUNmLDJDQUNxQjs7SUFDckIsc0NBQ2U7O0lBQ2YsNENBQzJCOzs7OztJQUVmLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3QsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0bGFzTWFuYWdlciwgQ2lyY2xlLCBGaWxsLCBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtY2lyY2xlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZUNpcmNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS1jaXJjbGUnO1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogQ2lyY2xlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZpbGw6IEZpbGw7XHJcbiAgQElucHV0KClcclxuICByYWRpdXM6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNuYXBUb1BpeGVsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3Ryb2tlOiBTdHJva2U7XHJcbiAgQElucHV0KClcclxuICBhdGxhc01hbmFnZXI6IEF0bGFzTWFuYWdlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7fVxyXG5cclxuICAvKipcclxuICAgKiBXT1JLLUFST1VORDogc2luY2UgdGhlIHJlLXJlbmRlcmluZyBpcyBub3QgdHJpZ2dlcmVkIG9uIHN0eWxlIGNoYW5nZVxyXG4gICAqIHdlIHRyaWdnZXIgYSByYWRpdXMgY2hhbmdlLlxyXG4gICAqIHNlZSBvcGVubGF5ZXJzICM2MjMzIGFuZCAjNTc3NVxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICghIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUuQ2lyY2xlIGluc3RhbmNlXFwncyByYWRpdXMnKTtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXModGhpcy5yYWRpdXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkNpcmNsZSBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2lyY2xlKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydyYWRpdXMnXSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyhjaGFuZ2VzWydyYWRpdXMnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWNpcmNsZSwgc2V0dGluZyBuZXcgcmFkaXVzOiAnLCBjaGFuZ2VzWydyYWRpdXMnXS5jdXJyZW50VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXN0eWxlLWNpcmNsZScpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=