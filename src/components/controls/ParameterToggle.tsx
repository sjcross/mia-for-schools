import { sendParameter } from '../../lib/util';

interface Props {
  parameter: ParameterJSON;
  updatePage: Function;
}

export default function Toggle(props: Props) {
  return (
      <input
        class="h-8 w-8 mb-1 rounded-xl bg-emerald-300 transition duration-150 ease-in-out hover:scale-110 hover:bg-fuchsia-400"
        type="checkbox"
        name="fname"
        checked={props.parameter.value === 'true'}
        onClick={(e) =>
          sendParameter(
            props.parameter.moduleid,
            props.parameter.name,
            Boolean((e.target as HTMLInputElement).checked).toString(),
            props.parameter.parentGroupName,
            props.parameter.groupCollectionNumber,
            props.updatePage
          )
        }
      />
  );
}
