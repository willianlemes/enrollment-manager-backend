import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableStudents1615250826833 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "students",
        columns: [
          {
            name: "id",
            type: "uuid",
            generationStrategy: "uuid",
            isPrimary: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "ra",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "cpf",
            type: "varchar",
            length: "11",
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("students", true);
  }
}
