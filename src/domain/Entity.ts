import { Identifier } from "./Identifier";

export class Entity<Props> {

  private id: Identifier;
  private props: Props;

  protected constructor (props: Props, id?: Identifier) {
    this.props = props;
    this.id = id ?? new Identifier();
  }
}