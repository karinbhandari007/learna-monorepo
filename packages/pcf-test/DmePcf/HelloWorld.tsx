import * as React from 'react';
import { Label } from '@fluentui/react';
import { HelloWorld as HelloWorldCommon } from "shared" 

export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      // <Label>
      //   {this.props.name}
      // </Label>
      <HelloWorldCommon />
    )
  }
}
