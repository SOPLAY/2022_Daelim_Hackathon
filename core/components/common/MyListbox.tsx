import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import ExerciseList from '@lib/ExerciseList.json';
import { useRouter } from 'next/router';

const MyListbox = () => {
  const [selected, setSelected] = useState(ExerciseList.data[0]);
  const [subSelected, setSubSelected] = useState(selected.subTarget);
  const [userPick, setUserPick] = useState(['']);
  const route = useRouter();
  let target = typeof userPick === 'object' ? userPick[0] : userPick;
  const onClick = (target) => {
    route.push(
      './exerciselog' +
        `?target=${target}&eng=${selected.eng}&id=${selected.id}`
    );
  };
  useEffect(() => {
    setSubSelected(selected.subTarget);
  }, [selected]);

  return (
    <div className="flex flex-col mt-[20px] h-[70%]">
      <Listbox
        value={selected}
        onChange={(data) => {
          setSelected(data);
          setUserPick(['']);
        }}
      >
        <div className="relative mt-1 w-[400px]">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-5 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 2xl:text-2xl">
            <span className="block truncate">{selected.mainTarget}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 2xl:text-2xl z-10">
              {ExerciseList.data.map((exercise, exerciseIdx) => (
                <Listbox.Option
                  key={exerciseIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={exercise}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {exercise.mainTarget}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Listbox value={subSelected} onChange={setUserPick}>
        <div className="relative mt-[70px] w-[400px]">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-5 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 2xl:text-2xl ">
            <span className="block truncate ">
              {typeof userPick === 'object' ? subSelected[0] : target}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
              <SelectorIcon
                className="h-5 w-5 text-gray-400 "
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 2xl:text-2xl  ">
              {subSelected.map((exercise, exerciseIdx) => (
                <Listbox.Option
                  key={exerciseIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={exercise}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {exercise}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600 ">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className="flex justify-end mt-[30%]">
        <button
          className="bg-white w-[100px] h-14 2xl:text-2xl rounded-lg shadow-md cursor-pointer"
          type="submit"
          onClick={() => {
            onClick(target);
          }}
        >
          선택
        </button>
      </div>
    </div>
  );
};

export default MyListbox;
