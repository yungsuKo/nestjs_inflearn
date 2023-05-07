import { Injectable } from '@nestjs/common';
import { CreateImageUploaderInput } from './dto/create-image-uploader.input';
import { UpdateImageUploaderInput } from './dto/update-image-uploader.input';

@Injectable()
export class ImageUploaderService {
  create({ files }) {
    //  구글 스토리지에 파일 업로드 하기
    return ['This action adds a new imageUploader'];
  }

  findAll() {
    return `This action returns all imageUploader`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageUploader`;
  }

  update(id: number, updateImageUploaderInput: UpdateImageUploaderInput) {
    return `This action updates a #${id} imageUploader`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageUploader`;
  }
}
