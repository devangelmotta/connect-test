import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isValidMake', async: false })
export class IsValidMakeConstraint implements ValidatorConstraintInterface {
  validate(make: string) {
    const allowedMakes = ['Acura', 'BMW'];
    return allowedMakes.includes(make);
  }

  defaultMessage() {
    return 'El valor proporcionado para "make" no está permitido.';
  }
}

export function IsValidMake(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidMakeConstraint,
    });
  };
}
