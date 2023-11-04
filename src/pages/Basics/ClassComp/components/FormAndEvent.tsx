import { Button, Card, Form, Input } from "antd";
import type { FormInstance } from "antd/es/form";
import type { InputRef } from "antd";
import { useRef } from "react";

export const FormAndEvent: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formRef2 = useRef<FormInstance>(null);
  const inputRef2 = useRef<InputRef>(null);

  const handleGetInput = () => {
    if (inputRef?.current) {
      console.log(inputRef.current.value);
    }
  };

  const handleGetInput2 = () => {
    if (inputRef2?.current) {
      console.log(inputRef2.current.input?.value);
    }
  };

  return (
    <div>
      <Card title="Common Form">
        <input ref={inputRef} />
        <button onClick={handleGetInput}>获取input内容</button>
        <form
          ref={formRef}
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              email: { value: string };
              password: { value: string };
            };
            const email = target.email.value; // typechecks!
            const password = target.password.value; // typechecks!
            // etc...
          }}
        >
          <div>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div>
            <input type="submit" value="Log in" />
          </div>
        </form>
      </Card>
      <Card title="Antd Form">
        <Input ref={inputRef2} />
        <Button onClick={handleGetInput2}>获取input内容</Button>
        <Form ref={formRef2} name="control-ref">
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FormAndEvent;
