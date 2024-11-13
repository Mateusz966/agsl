import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730642893551 implements MigrationInterface {
    name = 'Migration1730642893551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" text NOT NULL`);
    }

}
