export const Loading = () => {
  return (
    <div className="grid justify-center p-40">
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-36 h-36 border-4 border-green-400 border-solid rounded-full animate-spin"
      ></div>
    </div>
  )
}

export const SmallLoading = () => (
  <span className="spinner-border border-white animate-spin inline-block w-5 h-5 border-2 rounded-full"></span>
)
