/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional } from '@angular/core';
import { Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { Color } from 'ol/color';
export class StyleStrokeComponent {
    /**
     * @param {?} styleHost
     * @param {?} styleCircleHost
     * @param {?} styleTextHost
     */
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-stroke with: ', this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.style.Stroke instance with: ', this);
        this.instance = new Stroke(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                // console.log('setting ol.style instance\'s stroke:', this.host);
                break;
            case 'style-text':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.stroke = this.instance;
                // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
            // break;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes['color']) {
            this.instance.setColor(changes['color'].currentValue);
        }
        if (changes['lineCap']) {
            this.instance.setLineCap(changes['lineCap'].currentValue);
        }
        if (changes['lineDash']) {
            this.instance.setLineDash(changes['lineDash'].currentValue);
        }
        if (changes['lineJoin']) {
            this.instance.setLineJoin(changes['lineJoin'].currentValue);
        }
        if (changes['miterLimit']) {
            this.instance.setMiterLimit(changes['miterLimit'].currentValue);
        }
        if (changes['width']) {
            this.instance.setWidth(changes['width'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
    }
}
StyleStrokeComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-stroke',
                template: `
    <div class="aol-style-stroke"></div>
  `,
            },] },
];
/** @nocollapse */
StyleStrokeComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
StyleStrokeComponent.propDecorators = {
    color: [{ type: Input }],
    lineCap: [{ type: Input }],
    lineDash: [{ type: Input }],
    lineJoin: [{ type: Input }],
    miterLimit: [{ type: Input }],
    width: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StyleStrokeComponent.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    StyleStrokeComponent.prototype.host;
    /** @type {?} */
    StyleStrokeComponent.prototype.color;
    /** @type {?} */
    StyleStrokeComponent.prototype.lineCap;
    /** @type {?} */
    StyleStrokeComponent.prototype.lineDash;
    /** @type {?} */
    StyleStrokeComponent.prototype.lineJoin;
    /** @type {?} */
    StyleStrokeComponent.prototype.miterLimit;
    /** @type {?} */
    StyleStrokeComponent.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Ryb2tlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3N0eWxlcy9zdHJva2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFRakMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBa0IvQixZQUNjLFNBQXlCLEVBQ3pCLGVBQXFDLEVBQ3JDLGFBQWlDO1FBRTdDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7U0FDM0I7YUFBTSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO1FBQ0QseURBQXlEO0lBQzNELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04saUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUMsa0VBQWtFO2dCQUNsRSxNQUFNO1lBQ1IsS0FBSyxZQUFZO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLHlFQUF5RTtnQkFDekUsTUFBTTtZQUNSO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELFNBQVM7U0FDVjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsMEZBQTBGO0lBQzVGLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFWUSxjQUFjLHVCQThCbEIsUUFBUTtZQTdCSixvQkFBb0IsdUJBOEJ4QixRQUFRO1lBN0JKLGtCQUFrQix1QkE4QnRCLFFBQVE7OztvQkFoQlYsS0FBSztzQkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxLQUFLO29CQUVMLEtBQUs7Ozs7SUFkTix3Q0FBd0I7Ozs7O0lBRXhCLG9DQUE2RTs7SUFFN0UscUNBQ3lCOztJQUN6Qix1Q0FDNEI7O0lBQzVCLHdDQUMrQjs7SUFDL0Isd0NBQzZCOztJQUM3QiwwQ0FDK0I7O0lBQy9CLHFDQUMwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHlsZUNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vY2lyY2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0eWxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ29sL2NvbG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLXN0cm9rZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtc3Ryb2tlXCI+PC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0eWxlU3Ryb2tlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHB1YmxpYyBpbnN0YW5jZTogU3Ryb2tlO1xyXG4gIC8qIHRoZSB0eXBpbmdzIGRvIG5vdCBoYXZlIHRoZSBzZXR0ZXJzICovXHJcbiAgcHJpdmF0ZSBob3N0OiAvKlN0eWxlQ29tcG9uZW50fFN0eWxlQ2lyY2xlQ29tcG9uZW50fFN0eWxlVGV4dENvbXBvbmVudCovIGFueTtcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvcjogQ29sb3IgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBsaW5lQ2FwOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBsaW5lRGFzaDogbnVtYmVyW10gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBsaW5lSm9pbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWl0ZXJMaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUhvc3Q6IFN0eWxlQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVDaXJjbGVIb3N0OiBTdHlsZUNpcmNsZUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIHN0eWxlVGV4dEhvc3Q6IFN0eWxlVGV4dENvbXBvbmVudFxyXG4gICkge1xyXG4gICAgaWYgKCFzdHlsZUhvc3QpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtc3Ryb2tlIG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIGFvbC1zdHlsZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhc3R5bGVUZXh0SG9zdCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZVRleHRIb3N0O1xyXG4gICAgfSBlbHNlIGlmICghIXN0eWxlQ2lyY2xlSG9zdCkge1xyXG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZUNpcmNsZUhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZUhvc3Q7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLXN0cm9rZSB3aXRoOiAnLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLlN0cm9rZSBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3Ryb2tlKHRoaXMpO1xyXG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xyXG4gICAgICBjYXNlICdzdHlsZSc6XHJcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0cm9rZSh0aGlzLmluc3RhbmNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZSBpbnN0YW5jZVxcJ3Mgc3Ryb2tlOicsIHRoaXMuaG9zdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N0eWxlLXRleHQnOlxyXG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHJva2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3N0eWxlLWNpcmNsZSc6XHJcbiAgICAgICAgdGhpcy5ob3N0LnN0cm9rZSA9IHRoaXMuaW5zdGFuY2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUuY2lyY2xlIGluc3RhbmNlXFwncyBzdHJva2U6JywgdGhpcy5ob3N0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaG9zdCB0eXBlOiAnICsgdGhpcy5ob3N0KTtcclxuICAgICAgLy8gYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2NvbG9yJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRDb2xvcihjaGFuZ2VzWydjb2xvciddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snbGluZUNhcCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TGluZUNhcChjaGFuZ2VzWydsaW5lQ2FwJ10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydsaW5lRGFzaCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TGluZURhc2goY2hhbmdlc1snbGluZURhc2gnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2xpbmVKb2luJ10pIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRMaW5lSm9pbihjaGFuZ2VzWydsaW5lSm9pbiddLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snbWl0ZXJMaW1pdCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TWl0ZXJMaW1pdChjaGFuZ2VzWydtaXRlckxpbWl0J10uY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWyd3aWR0aCddKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0V2lkdGgoY2hhbmdlc1snd2lkdGgnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLXN0cm9rZSwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgY2hhbmdlcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==