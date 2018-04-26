/**
 * ListEntity class file.
 *
 * @package Entities
 *
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import AbstractEntity from "./AbstractEntity";

/**
 * ListEntity
 * サンプルリスト
 * initial dataはdocker/mysql配下にいる
 *
 * @author hoge(hoge@mediba.jp)
 */
@Entity("list")
export class ListEntity extends AbstractEntity {

    /**
     * @var number id サロゲートキー
     */
    @PrimaryColumn("integer")
    id!: number;

    /**
     * @var string name 名前
     */
    @Column()
    name!: string;

    /**
     * @var string url url
     */
    @Column()
    image_url!: string;

    /**
     * @var Date created_date 作成日
     */
    @CreateDateColumn({ name: "created_date" })
    created_date!: Date;

    /**
     * @var Date updated_date 更新日
     */
    @UpdateDateColumn({ name: "updated_date" })
    updated_date!: Date;

    /**
     * @var Date deleted_date 削除日
     */
    @Column("date")
    deleted_date!: Date;
}
