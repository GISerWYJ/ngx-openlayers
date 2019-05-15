/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
var StyleComponent = /** @class */ (function () {
    function StyleComponent(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    /**
     * @return {?}
     */
    StyleComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    };
    /**
     * @return {?}
     */
    StyleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    };
    StyleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-style',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    StyleComponent.ctorParameters = function () { return [
        { type: FeatureComponent, decorators: [{ type: Optional }] },
        { type: LayerVectorComponent, decorators: [{ type: Optional }] }
    ]; };
    StyleComponent.propDecorators = {
        geometry: [{ type: Input }],
        fill: [{ type: Input }],
        image: [{ type: Input }],
        stroke: [{ type: Input }],
        text: [{ type: Input }],
        zIndex: [{ type: Input }]
    };
    return StyleComponent;
}());
export { StyleComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StyleComponent.prototype.host;
    /** @type {?} */
    StyleComponent.prototype.instance;
    /** @type {?} */
    StyleComponent.prototype.componentType;
    /** @type {?} */
    StyleComponent.prototype.geometry;
    /** @type {?} */
    StyleComponent.prototype.fill;
    /** @type {?} */
    StyleComponent.prototype.image;
    /** @type {?} */
    StyleComponent.prototype.stroke;
    /** @type {?} */
    StyleComponent.prototype.text;
    /** @type {?} */
    StyleComponent.prototype.zIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3N0eWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3ZFO0lBd0JFLHdCQUF3QixXQUE2QixFQUFjLFNBQStCO1FBZjNGLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBZ0I3QixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCwrQkFBTTs7O0lBQU47UUFDRSxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7O2dCQVRRLGdCQUFnQix1QkE0QlYsUUFBUTtnQkEzQmQsb0JBQW9CLHVCQTJCNkIsUUFBUTs7OzJCQWIvRCxLQUFLO3VCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLO3VCQUVMLEtBQUs7eUJBRUwsS0FBSzs7SUFxQlIscUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXBDWSxjQUFjOzs7Ozs7SUFDekIsOEJBQXNEOztJQUN0RCxrQ0FBdUI7O0lBQ3ZCLHVDQUErQjs7SUFFL0Isa0NBQytDOztJQUMvQyw4QkFDVzs7SUFDWCwrQkFDYTs7SUFDYixnQ0FDZTs7SUFDZiw4QkFDVzs7SUFDWCxnQ0FDZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsbCwgSW1hZ2UsIFN0cm9rZSwgU3R5bGUsIFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbSc7XHJcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1zdHlsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgaG9zdDogRmVhdHVyZUNvbXBvbmVudCB8IExheWVyVmVjdG9yQ29tcG9uZW50O1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogU3R5bGU7XHJcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc3R5bGUnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5OiBzdHJpbmcgfCBHZW9tZXRyeSB8IEdlb21ldHJ5RnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBmaWxsOiBGaWxsO1xyXG4gIEBJbnB1dCgpXHJcbiAgaW1hZ2U6IEltYWdlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3Ryb2tlOiBTdHJva2U7XHJcbiAgQElucHV0KClcclxuICB0ZXh0OiBUZXh0O1xyXG4gIEBJbnB1dCgpXHJcbiAgekluZGV4OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZlYXR1cmVIb3N0OiBGZWF0dXJlQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBsYXllckhvc3Q6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlJyk7XHJcbiAgICB0aGlzLmhvc3QgPSAhIWZlYXR1cmVIb3N0ID8gZmVhdHVyZUhvc3QgOiBsYXllckhvc3Q7XHJcbiAgICBpZiAoIXRoaXMuaG9zdCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZSBtdXN0IGJlIGFwcGxpZWQgdG8gYSBmZWF0dXJlIG9yIGEgbGF5ZXInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBzdHlsZVxcJ3MgaG9zdDogJywgdGhpcy5ob3N0KTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5jaGFuZ2VkKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0eWxlKHRoaXMpO1xyXG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0eWxlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=