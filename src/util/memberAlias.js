export default function memberAlias(target, member, name) {
  target[name] = target[member];
}