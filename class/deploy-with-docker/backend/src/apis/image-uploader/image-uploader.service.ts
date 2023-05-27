import { Injectable } from '@nestjs/common';
import { CreateImageUploaderInput } from './dto/create-image-uploader.input';
import { UpdateImageUploaderInput } from './dto/update-image-uploader.input';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class ImageUploaderService {
  async create({ files }) {
    const waitedFiles = await Promise.all(files);
    // console.log(waitedFiles);

    const storage = new Storage({
      projectId: 'codecamp-386223',
      keyFilename: 'codecamp-386223-89eb7af08f6b.json',
    }).bucket('codecamp-tom2');

    //  구글 스토리지에 파일 업로드 하기

    // new Promise((resolve, reject) => {
    //   myfile
    //     .createReadStream()
    //     .pipe(storage.createWriteStream())
    //     .on('finish', (res) => {
    //       resolve(res);
    //     })
    //     .on('error', (err) => {
    //       reject();
    //     });
    // });

    return await Promise.all(
      waitedFiles.map((file) => {
        return new Promise((resolve, reject) => {
          file
            .createReadStream()
            .pipe(storage.file(file.filename).createWriteStream())
            .on('finish', () => {
              resolve(`codecamp-tom2/${file.filename}`);
            })
            .on('error', (err) => {
              reject();
            });
        });
      }),
    );

    // const myfile = files[0];
    // myfile
    //   .createReadStream()
    //   .pipe(storage.createWriteStream())
    //   .on('finish', () => {
    //     console.log('finish');
    //   })
    //   .on('error', (err) => {
    //     console.log(err);
    //   });
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
