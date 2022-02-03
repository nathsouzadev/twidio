import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Posts1642549851159 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'post_id',
            type: 'string',
            isPrimary: true
          },
          {
            name: 'author',
            type: 'string',
            isNullable: false
          },
          {
            name: 'content',
            type: 'string',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts')
  }
}
