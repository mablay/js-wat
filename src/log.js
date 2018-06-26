// log table
function log (args) {
  const COL_SIZE = 24
  console.log(
    args.map(s => s
      .padStart(COL_SIZE)
      .substring(0, COL_SIZE))
      .join('')
  )
}

module.exports = {log}
