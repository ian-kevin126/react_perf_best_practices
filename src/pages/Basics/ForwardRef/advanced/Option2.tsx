import React from "react";

type ClickableListProps<T> = {
  items: T[];
  onSelect: (item: T) => void;
  mRef?: React.Ref<HTMLUListElement>;
};

function ClickableListInner<T>(
  props: ClickableListProps<T>
  //ref: React.ForwardedRef<HTMLUListElement>
) {
  return (
    <ul ref={props.mRef}>
      {props.items.map((item, i) => (
        <li key={i}>
          <button onClick={(el) => props.onSelect(item)}>Select</button>
          {item as any}
        </li>
      ))}
    </ul>
  );
}

/*const ClickableListWithRef = forwardRef(ClickableListInner);

/*const ClickableList = React.forwardRef(ClickableListInner) as <T>(
  props: ClickableListProps<T> & { ref?: React.ForwardedRef<HTMLUListElement> }
) => ReturnType<typeof ClickableListInner>;

type ClickableListWithRefProps<T> = ClickableListProps<T> & {
  mref: React.Ref<HTMLUListElement> | null;
};

function ClickableList<T extends unknown>({
  mref,
  ...rest
}: ClickableListWithRefProps<T>) {
  return <ClickableListWithRef {...rest} />;
}
*/

export const ClickableList = ClickableListInner;
