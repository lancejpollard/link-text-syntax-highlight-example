
const code = () => `
tree mark
  take size, like mark-8

  hook bind
    form mark-{size}
      task seek-add
        take a, like mark-{size}
        take b, like mark-{size}
        fuse free-result, like mark-{size}
        save c
          call add-js
            read a
            read b
        fuse is-below-or-return-error
          read c
          mark 256
        move c

      task seek-add-signed
        take a, like mark-{size}
        take b, like mark-{size}
        save c
          call add-js
            read a
            read b
        fuse is-below-or-return-error
          read c
          mark 256
        fuse is-minimally-or-return-error
          read c
          mark 0
        move c
`
