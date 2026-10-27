import { sendParameter } from '../../lib/util';

interface Props {
  parameter: ParameterJSON;
  updatePage: Function;
}

export default function TextEntry(props: Props) {
  var prevValue = "";

  function send(value: string) {
    if (value !== prevValue)
      sendParameter(
        props.parameter.moduleid,
        props.parameter.name,
        value,
        props.parameter.parentGroupName,
        props.parameter.groupCollectionNumber,
        props.updatePage
      );
    prevValue = value;
  }

  return (
    <input
      class="h-10 m-1 text-2xl w-auto rounded-xl bg-blue-300 text-white hover:shadow-md transition duration-150 ease-in-out hover:scale-110"
      type="text"
      name="fname"
      value={props.parameter.value}
      onFocusOut={(e) => {
        send((e.target as HTMLInputElement).value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter')
          send((e.target as HTMLInputElement).value);
      }}
      style="text-align:center"
    />
  );
}
