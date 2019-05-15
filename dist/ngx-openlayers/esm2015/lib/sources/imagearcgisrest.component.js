/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Host, Input } from '@angular/core';
import { ImageArcGISRest } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { LoadFunction } from 'ol/Image';
export class SourceImageArcGISRestComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
        this.ratio = 1.5;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceImageArcGISRestComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-imagearcgisrest',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceImageArcGISRestComponent)) }],
            },] },
];
/** @nocollapse */
SourceImageArcGISRestComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
SourceImageArcGISRestComponent.propDecorators = {
    projection: [{ type: Input }],
    url: [{ type: Input }],
    attributions: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    imageLoadFunction: [{ type: Input }],
    params: [{ type: Input }],
    ratio: [{ type: Input }],
    resolutions: [{ type: Input }],
    wrapX: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.instance;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.projection;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.url;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.attributions;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.imageLoadFunction;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.params;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.ratio;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.resolutions;
    /** @type {?} */
    SourceImageArcGISRestComponent.prototype.wrapX;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVN4QyxNQUFNLE9BQU8sOEJBQStCLFNBQVEsZUFBZTs7OztJQWFqRSxZQUFvQixLQUEwQjtRQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFMTixVQUFLLEdBQUcsR0FBRyxDQUFDO0lBTXJCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOztHQUVUO2dCQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDhCQUE4QixFQUFDLEVBQUUsQ0FBQzthQUN6Rzs7OztZQVpRLG1CQUFtQix1QkEwQmIsSUFBSTs7O3lCQVZoQixLQUFLO2tCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQVZOLGtEQUEwQjs7SUFFMUIsb0RBQTZDOztJQUM3Qyw2Q0FBcUI7O0lBQ3JCLHNEQUF5Qzs7SUFDekMscURBQThCOztJQUM5QiwyREFBMEM7O0lBQzFDLGdEQUF1Qzs7SUFDdkMsK0NBQXFCOztJQUNyQixxREFBZ0M7O0lBQ2hDLCtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlQXJjR0lTUmVzdCB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcclxuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlYXJjZ2lzcmVzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIGluc3RhbmNlOiBJbWFnZUFyY0dJU1Jlc3Q7XHJcblxyXG4gIEBJbnB1dCgpIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlW107XHJcbiAgQElucHV0KCkgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XHJcbiAgQElucHV0KCkgcGFyYW1zPzogeyBbazogc3RyaW5nXTogYW55IH07XHJcbiAgQElucHV0KCkgcmF0aW8gPSAxLjU7XHJcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM/OiBudW1iZXJbXTtcclxuICBASW5wdXQoKSB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcclxuICAgIHN1cGVyKGxheWVyKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZUFyY0dJU1Jlc3QodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=