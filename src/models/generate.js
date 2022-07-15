export async function resetDB(db) {

  db.action(async () => {
    await db.unsafeResetDatabase()
  })
}

