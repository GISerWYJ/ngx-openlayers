/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
export class StyleComponent {
    /**
     * @param {?} featureHost
     * @param {?} layerHost
     */
    constructor(featureHost, layerHost) {
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
    update() {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    }
}
StyleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
StyleComponent.ctorParameters = () => [
    { type: FeatureComponent, decorators: [{ type: Optional }] },
    { type: LayerVectorComponent, decorators: [{ type: Optional }] }
];
StyleComponent.propDecorators = {
    geometry: [{ type: Input }],
    fill: [{ type: Input }],
    image: [{ type: Input }],
    stroke: [{ type: Input }],
    text: [{ type: Input }],
    zIndex: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3N0eWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBU3ZFLE1BQU0sT0FBTyxjQUFjOzs7OztJQWtCekIsWUFBd0IsV0FBNkIsRUFBYyxTQUErQjtRQWYzRixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQWdCN0IscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFUUSxnQkFBZ0IsdUJBNEJWLFFBQVE7WUEzQmQsb0JBQW9CLHVCQTJCNkIsUUFBUTs7O3VCQWIvRCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLO21CQUVMLEtBQUs7cUJBRUwsS0FBSzs7Ozs7OztJQWROLDhCQUFzRDs7SUFDdEQsa0NBQXVCOztJQUN2Qix1Q0FBK0I7O0lBRS9CLGtDQUMrQzs7SUFDL0MsOEJBQ1c7O0lBQ1gsK0JBQ2E7O0lBQ2IsZ0NBQ2U7O0lBQ2YsOEJBQ1c7O0lBQ1gsZ0NBQ2UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGwsIEltYWdlLCBTdHJva2UsIFN0eWxlLCBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQgfCBMYXllclZlY3RvckNvbXBvbmVudDtcclxuICBwdWJsaWMgaW5zdGFuY2U6IFN0eWxlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlJztcclxuXHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeTogc3RyaW5nIHwgR2VvbWV0cnkgfCBHZW9tZXRyeUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmlsbDogRmlsbDtcclxuICBASW5wdXQoKVxyXG4gIGltYWdlOiBJbWFnZTtcclxuICBASW5wdXQoKVxyXG4gIHN0cm9rZTogU3Ryb2tlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGV4dDogVGV4dDtcclxuICBASW5wdXQoKVxyXG4gIHpJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmZWF0dXJlSG9zdDogRmVhdHVyZUNvbXBvbmVudCwgQE9wdGlvbmFsKCkgbGF5ZXJIb3N0OiBMYXllclZlY3RvckNvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZScpO1xyXG4gICAgdGhpcy5ob3N0ID0gISFmZWF0dXJlSG9zdCA/IGZlYXR1cmVIb3N0IDogbGF5ZXJIb3N0O1xyXG4gICAgaWYgKCF0aGlzLmhvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUgbXVzdCBiZSBhcHBsaWVkIHRvIGEgZmVhdHVyZSBvciBhIGxheWVyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRpbmcgc3R5bGVcXCdzIGhvc3Q6ICcsIHRoaXMuaG9zdCk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuY2hhbmdlZCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHlsZSh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHlsZSh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19