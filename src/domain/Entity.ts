import { Identifier } from "./valueobject/Identifier";

export class Entity<Props> {

  readonly id: Identifier;
  protected props: Props;

  protected constructor (props: Props, id?: Identifier) {
    this.props = props;
    this.id = id ?? new Identifier();
  }
}