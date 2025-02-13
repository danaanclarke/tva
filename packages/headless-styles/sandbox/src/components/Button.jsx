import { getButtonProps, getJSButtonProps } from '../../../src'

export default function Button() {
  console.log(getJSButtonProps({ kind: 'medium', size: 'xs' }))

  return (
    <div>
      <div className="App-container">
        <button {...getButtonProps()}>default</button>
        <button {...getButtonProps({ kind: 'text-weak' })}>text-weak</button>
        <button {...getButtonProps({ kind: 'weak' })}>weak</button>
        <button {...getButtonProps({ kind: 'medium' })}>medium</button>
        <button {...getButtonProps({ kind: 'strong' })}>strong</button>
      </div>
      <div className="App-container">
        <button {...getButtonProps({ kind: 'medium', size: 'xs' })}>
          xtra-small
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 's' })}>
          small
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 'm' })}>
          medium
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 'l' })}>
          large
        </button>
      </div>

      <h2>JS Button Props</h2>
      <div className="App-container">
        <button {...getButtonProps()}>default</button>
        <button {...getButtonProps({ kind: 'text-weak' })}>text-weak</button>
        <button {...getButtonProps({ kind: 'weak' })}>weak</button>
        <button {...getButtonProps({ kind: 'medium' })}>medium</button>
        <button {...getButtonProps({ kind: 'strong' })}>strong</button>
      </div>
      <div className="App-container">
        <button {...getButtonProps({ kind: 'medium', size: 'xs' })}>
          xtra-small
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 's' })}>
          small
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 'm' })}>
          medium
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 'l' })}>
          large
        </button>
      </div>
    </div>
  )
}
