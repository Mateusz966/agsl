import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732357561115 implements MigrationInterface {
    name = 'Migration1732357561115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ingredients" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "amount" real NOT NULL, "unit" character varying NOT NULL, "dishId" uuid, CONSTRAINT "PK_9240185c8a5507251c9f15e0649" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dish" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_59ac7b35af39b231276bfc4c00c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dish_photo" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "dishId" uuid, CONSTRAINT "PK_60f610190ce8b290597694c46d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."shopping_list_status_enum" AS ENUM('Draft', 'Accepted', 'Ended')`);
        await queryRunner.query(`CREATE TABLE "shopping_list" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "status" "public"."shopping_list_status_enum", "generatedShoppingList" jsonb NOT NULL, "userId" uuid, CONSTRAINT "PK_87d9431f2ea573a79370742b474" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD CONSTRAINT "FK_106db4273dff78ef2be0b24d8bd" FOREIGN KEY ("dishId") REFERENCES "dish"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dish" ADD CONSTRAINT "FK_24501fd05bd50dfe7ae5d4768f0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dish_photo" ADD CONSTRAINT "FK_b1f7b4bac2015f942f0ba4840d9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dish_photo" ADD CONSTRAINT "FK_67f67e6a71d07f8ad0d57e78641" FOREIGN KEY ("dishId") REFERENCES "dish"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_list" ADD CONSTRAINT "FK_38e60f213f35fb8fe51d3bf41e4" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_list" DROP CONSTRAINT "FK_38e60f213f35fb8fe51d3bf41e4"`);
        await queryRunner.query(`ALTER TABLE "dish_photo" DROP CONSTRAINT "FK_67f67e6a71d07f8ad0d57e78641"`);
        await queryRunner.query(`ALTER TABLE "dish_photo" DROP CONSTRAINT "FK_b1f7b4bac2015f942f0ba4840d9"`);
        await queryRunner.query(`ALTER TABLE "dish" DROP CONSTRAINT "FK_24501fd05bd50dfe7ae5d4768f0"`);
        await queryRunner.query(`ALTER TABLE "ingredients" DROP CONSTRAINT "FK_106db4273dff78ef2be0b24d8bd"`);
        await queryRunner.query(`DROP TABLE "shopping_list"`);
        await queryRunner.query(`DROP TYPE "public"."shopping_list_status_enum"`);
        await queryRunner.query(`DROP TABLE "dish_photo"`);
        await queryRunner.query(`DROP TABLE "dish"`);
        await queryRunner.query(`DROP TABLE "ingredients"`);
    }

}
