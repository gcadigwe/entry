const client = require('../db/db_config');

exports.getSpecificUserHashes = async (req, res) => {
  const result = await client.query(
    `SELECT * FROM hash_schema.hash_table WHERE uploadedBy="${req.params.userId}"`
  );
  res.send({ result });
};

exports.createNewHashDetails = async (req, res) => {
  try {
    const newHash = await client.insert({
      table: 'hash_table',
      records: [
        {
          Filename: req.body.name,
          description: req.body.description,
          hash: req.body.hash,
          Filetype: req.body.type,
          uploadedBy: req.body.userId,
        },
      ],
    });

    res.send({ newHash });
  } catch (error) {
    res.send({ error });
  }
};
