/**
 * Index Template
 * Container Component
 *
 * @package Components
 *
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "reflect-metadata";
import * as React from "react";
import ormConfig from "../../../ormconfig";
import {IndexProps} from "../../props/IndexProps";
import {ListEntity} from "../../entities/ListEntity";
import {createConnection} from "typeorm";

/**
 * IndexTemplate（Anonymus）
 *
 * @author hoge(hoge@mediba.jp)
 */
export default class extends React.Component<IndexProps, any> {

    /**
     * 初期状態のpropsを返す（nextjs規約）
     *
     * @returns Promise<IndexProps>
     */
    public static async getInitialProps(): Promise<IndexProps> {

        let name = "gggg";

        const connection = await createConnection(ormConfig);

        try {
            const list: ListEntity | undefined = await connection.manager.findOne<ListEntity>(ListEntity);

            if (list !== undefined) {
                name = list.name;
            }
        } catch (error) {
            console.log(error);
        } finally {
            connection.close();
        }

        return { name: name } as IndexProps;
    }

    /**
     * renderする
     *
     * @returns React.ReactNode
     */
    public render(): React.ReactNode {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
