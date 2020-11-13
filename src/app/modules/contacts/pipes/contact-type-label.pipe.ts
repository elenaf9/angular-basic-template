import { Pipe, PipeTransform } from '@angular/core';
import { ContactType } from '../models/contact';


const contactTypeLabel: {[key in ContactType]: string} = {
  [ContactType.GROUP]: 'Group',
  [ContactType.PERSON]: 'Person'
};


@Pipe({
  name: 'contactTypeLabel'
})
export class ContactTypeLabelPipe implements PipeTransform {

  transform(type: ContactType): string {
    return contactTypeLabel[type] ? contactTypeLabel[type] : type;
  }

}
