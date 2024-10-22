import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPage1729592285396 implements MigrationInterface {
    name = 'AddPage1729592285396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "page" ("id" SERIAL NOT NULL, "parent_id" integer, "title" character varying NOT NULL, CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "page"`);
    }

}
