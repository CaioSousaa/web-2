import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateContactDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastName?: string;

  @IsOptional()
  @IsNumber()
  @Min(10000000000)
  @Max(99999999999)
  numberPhone?: number;

  @IsOptional()
  @IsEmail()
  email?: string;
}
